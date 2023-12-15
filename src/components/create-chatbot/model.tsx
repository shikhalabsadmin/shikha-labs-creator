"use client"

import React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface PromptProps {
  prompt: string
  setPrompt: React.Dispatch<React.SetStateAction<string>>
  indexName: string
  subject: string
  setSubject: React.Dispatch<React.SetStateAction<string>>
  grade: string
  setGrade: React.Dispatch<React.SetStateAction<string>>
}

const Model = ({
  prompt,
  setPrompt,
  indexName,
  subject,
  setSubject,
  grade,
  setGrade,
}: PromptProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="px-6 pt-4 text-2xl font-semibold">Chatbot Model</h1>

      <Card className="mx-5">
        <CardHeader className="pb-4">
          <CardTitle>Model Name</CardTitle>
          <CardDescription className="text-primary/60 text-sm leading-5">
            Name of the AI model you want to use.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mt-2 flex">
            <div className="bg-secondary flex items-center rounded-lg px-4 py-2">
              <svg
                fill="currentColor"
                width="600px"
                height={"600px"}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="block h-5 w-5 align-middle"
              >
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"></path>
              </svg>
              <span className="px-4 font-medium ">GPT-3.5-Turbo</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="mx-5">
        <CardHeader className="pb-4">
          <CardTitle>Subject</CardTitle>
          <CardDescription className="text-primary/60 text-sm">
            Subject for your chatbot.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Select value={subject} onValueChange={(value) => setSubject(value)}>
            <SelectTrigger id="grade">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Hindi">Hindi</SelectItem>
              <SelectItem value="Urdu">Urdu</SelectItem>
              <SelectItem value="Mathematics">Mathematics</SelectItem>
              <SelectItem value="Science">Science</SelectItem>
              <SelectItem value="Social Science">Social Science</SelectItem>
              <SelectItem value="Sanskrit">Sanskrit</SelectItem>
              <SelectItem value="Physics">Physics</SelectItem>
              <SelectItem value="Chemistry">Chemistry</SelectItem>
              <SelectItem value="Biology">Biology</SelectItem>
              <SelectItem value="EVS">EVS</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
      <Card className="mx-5">
        <CardHeader className="pb-4">
          <CardTitle>Grade</CardTitle>
          <CardDescription className="text-primary/60 text-sm">
            Grade for your chatbot.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Select value={grade} onValueChange={(value) => setGrade(value)}>
            <SelectTrigger id="grade">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="Grade 1">Grade 1</SelectItem>
              <SelectItem value="Grade 2">Grade 2</SelectItem>
              <SelectItem value="Grade 3">Grade 3</SelectItem>
              <SelectItem value="Grade 4">Grade 4</SelectItem>
              <SelectItem value="Grade 5">Grade 5</SelectItem>
              <SelectItem value="Grade 6">Grade 6</SelectItem>
              <SelectItem value="Grade 7">Grade 7</SelectItem>
              <SelectItem value="Grade 8">Grade 8</SelectItem>
              <SelectItem value="Grade 9">Grade 9</SelectItem>
              <SelectItem value="Grade 10">Grade 10</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {!indexName && (
        <Card className="mx-5">
          <CardHeader className="pb-4">
            <CardTitle>Prompt Text</CardTitle>
            <CardDescription className="text-primary/60 text-sm">
              Prompt for your chatbot.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Please enter a prompt for your chatbot here."
              className="shadow-sm"
            />
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default Model
