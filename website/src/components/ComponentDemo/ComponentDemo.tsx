import React from 'react'
import './ComponentDemo.css'

interface ComponentDemoProps {
  title: string
  description?: string
  children: React.ReactNode
}

export function ComponentDemo({ title, description, children }: ComponentDemoProps) {
  return (
    <div className="component-demo">
      <div className="component-demo__header">
        <h3 className="component-demo__title">{title}</h3>
        {description && (
          <p className="component-demo__description">{description}</p>
        )}
      </div>
      <div className="component-demo__content">{children}</div>
    </div>
  )
}

