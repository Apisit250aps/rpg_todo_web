import React, { useState, useEffect, useCallback } from "react"
import { useParams } from "react-router-dom"
import WorkCard from "./WorkCard"
import apiClient from "../../../configs/axios"

interface Work {
  start_date: string;
  due_date: string;
  id: string
  name: string
  description: string
  tasks: any[]
  status: string
}

const WorkRender: React.FC<{ refreshTrigger: any }> = ({ refreshTrigger }) => {
  const { characterId } = useParams<{ characterId: string }>()
  const [works, setWorks] = useState<Work[]>([])
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    try {
      const response = await apiClient.get(`/work/all/${characterId}`)
      if (response.status === 200) {
        console.log(response.data)
        setWorks(response.data ?? []) // Handle possible null or undefined
        setError(null) // Clear any previous errors
      }
    } catch (error) {
      setError("Failed to fetch works. Please try again later.")
      console.error("Failed to fetch works:", error)
    }
  }, [characterId])

  useEffect(() => {
    fetchData()
  }, [refreshTrigger])

  return (
    <>
      {error && <div className="error-message">{error}</div>}
      {works.map((work, index) => (
        <WorkCard
          key={index}
          name={work.name}
          task={work.tasks}
          status={work.status}
          start={work.start_date}
          due={work.due_date}
        />
      ))}
    </>
  )
}

export default WorkRender
