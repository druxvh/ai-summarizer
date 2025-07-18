"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Copy, FileText, Sparkles } from "lucide-react"
import { toast } from "sonner"
import { useCompletion } from "@ai-sdk/react"
import { Textarea } from "@/components/ui/textarea"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useMemo } from "react"
import { motion } from "framer-motion"

interface Section {
  title: string
  content: string
  color: string
}

export default function Page() {
  const { completion, setCompletion, input, setInput, handleInputChange, handleSubmit, isLoading } =
    useCompletion({ api: "/api/summarize" })

  const handleCopySummary = async () => {
    if (completion) {
      await navigator.clipboard.writeText(completion)
      toast("Summary copied!")
    }
  }

  const handleClear = () => {
    if (input.length === 0) {
      toast("Input is already empty!")
      return
    }
    setInput("")
    setCompletion("")

    toast("Notes & summary cleared!")
  }

  // Parse AI markdown into raw sections
  function parseRawSections(markdown: string) {
    const secs: { title: string; content: string }[] = []
    markdown.split(/\n(?=\*\*)/).forEach(part => {
      const lines = part.trim().split("\n")
      if (lines[0]?.startsWith("**") && lines[0].endsWith("**")) {
        secs.push({
          title: lines[0].replace(/\*\*/g, "").trim(),
          content: lines.slice(1).join("\n"),
        })
      }
    })
    return secs
  }

  const pastelColors = [
    "bg-rose-100",
    "bg-pink-100",
    "bg-fuchsia-100",
    "bg-purple-100",
    "bg-violet-100",
    "bg-indigo-100",
    "bg-blue-100",
    "bg-sky-100",
    "bg-cyan-100",
    "bg-teal-100",
    "bg-emerald-100",
    "bg-green-100",
    "bg-lime-100",
    "bg-yellow-100",
    "bg-amber-100",
    "bg-orange-100",
    "bg-red-100",
    "bg-slate-100",
    "bg-zinc-100",
    "bg-stone-100"
  ]

  // Memoize sections + assign one random color each, only when `completion` changes
  const sections: Section[] = useMemo(() => {
    if (!completion) return []

    const raw = parseRawSections(completion)
    return raw.map((sec) => ({
      ...sec,
      color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completion])

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 sm-py-6">
          <div className="flex justify-center items-center gap-3 mb-2">
            <div className="p-2 bg-blue-100 rounded-sm sm:rounded-lg">
              <Sparkles className="size-4 sm:size-5 text-blue-600" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold">AI Notes Summarizer</h1>
          </div>
          <p className="text-gray-600 text-sm sm:text-base text-center text-pretty">Summarize your study notes instantly using AI</p>
        </div>
      </header>

      {/* Main */}
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 w-full max-w-6xl mx-auto px-4 py-6 grid md:grid-cols-2 gap-4">

        {/* Left Card */}
        <Card className="flex flex-col shadow-sm h-[50vh] sm:h-[70vh]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              Input Your Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 w-full overflow-auto space-y-4">
            <Label htmlFor="notes-input" className="text-sm text-gray-700">
              Paste your notes here
            </Label>
            <Textarea
              id="notes-input"
              value={input}
              onChange={handleInputChange}
              placeholder="Enter your study notes..."
              className="h-[25vh] sm:h-full sm:max-h-[48vh] resize-none overflow-auto"
            />
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleSubmit}
              disabled={isLoading || !input.trim()}
              className="w-full bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
              size="lg"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin h-4 w-4 border-b-2 border-white rounded-full mr-2" />
                  Summarizing...
                </div>
              ) : (
                <div className="flex items-center">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Summarize
                </div>
              )}
            </Button>
          </CardFooter>
        </Card>

        {/* Right Card */}
        <Card className="flex flex-col shadow-sm h-fit md:h-[70vh]">
          <CardHeader className="flex justify-between items-center">
            <CardTitle>Summary Result</CardTitle>
            {completion && (
              <Button variant="outline" size="sm" onClick={handleCopySummary} className="cursor-pointer">
                <Copy className="h-4 w-4 mr-1" /> Copy
              </Button>
            )}
          </CardHeader>
          <CardContent className="flex-1 w-full overflow-auto space-y-4">
            {sections.length > 0 ? (
              sections.map((sec, i) => (
                <div
                  key={i}
                  className={`rounded-lg p-4 border shadow-sm ${sec.color}`}
                >
                  <h2 className="text-lg font-semibold mb-2">{sec.title}</h2>
                  <div className="prose prose-sm pl-4 text-gray-800">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        ul: ({ children }) => (
                          <ul className="list-disc list-inside space-y-3">{children}</ul>
                        ),
                        li: ({ children }) => <li className="text-pretty leading-snug text-[15px]">{children}</li>,
                        p: ({ children }) => (
                          <p className="text-gray-700 mb-1">{children}</p>
                        ),
                      }}
                    >
                      {sec.content}
                    </ReactMarkdown>
                  </div>
                </div>
              ))
            )
              :
              isLoading ? (
                <div className="space-y-4 animate-pulse">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="rounded-lg border shadow-sm bg-gray-100 p-4 space-y-3"
                    >
                      <div className="h-4 w-1/3 bg-gray-300 rounded" />
                      <div className="space-y-2 pl-4">
                        <div className="h-3 w-3/4 bg-gray-200 rounded" />
                        <div className="h-3 w-2/3 bg-gray-200 rounded" />
                        <div className="h-3 w-1/2 bg-gray-200 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              )
                :
                (
                  <div className="h-full min-h-[200px] flex flex-col items-center justify-center gap-2 text-gray-500">
                    <FileText className="h-10 w-10" />
                    <p className="text-sm md:text-base">Your AI-generated summary will appear here</p>
                  </div>
                )}
          </CardContent>
        </Card>
      </motion.main>

      {/* Secondary Section */}
      <div className="text-center space-y-4">
        <Button
          variant="outline"
          onClick={handleClear}
          className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent cursor-pointer"
        >
          Clear
        </Button>

        <p className="text-sm text-gray-500 max-w-md mx-auto px-6">
          💡 <strong>Tip:</strong> This tool uses AI to convert dense notes into concise summaries. For best results,
          paste well-structured notes with clear headings and bullet points.
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <p className="text-center text-sm text-gray-500">Made for college project by Druavh.</p>
        </div>
      </footer>
    </div>
  )
}