'use client'

import { useEffect, useState } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
// Custom daisyUI components for MDX
const Alert = ({ children, type = 'info', className = '' }) => {
  const alertClass = `alert ${type ? `alert-${type}` : ''} ${className}`.trim()
  return (
    <div role="alert" className={alertClass}>
      {children}
    </div>
  )
}

const Card = ({ children, title, image, className = '' }) => {
  return (
    <div className={`card bg-base-100 shadow-xl ${className}`}>
      {image && (
        <figure>
          <Image src={image} alt={title || 'Card image'} />
        </figure>
      )}
      <div className="card-body">
        {title && <h2 className="card-title">{title}</h2>}
        {children}
      </div>
    </div>
  )
}

const Tabs = ({ children }) => {
  return <div role="tablist" className="tabs tabs-lifted">{children}</div>
}

const Tab = ({ children, label, active = false }) => {
  const activeClass = active ? 'tab-active' : ''
  return (
    <button role="tab" className={`tab ${activeClass}`}>
      {label || children}
    </button>
  )
}

const CodeBlock = ({ children, language = 'javascript' }) => {
  return (
    <div className="mockup-code bg-base-300 text-base-content">
      <pre data-prefix="$"><code>{children}</code></pre>
    </div>
  )
}

const Button = ({ children, color = 'primary', size = 'md', className = '', ...props }) => {
  const btnClass = `btn btn-${color} btn-${size} ${className}`.trim()
  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  )
}

const Badge = ({ children, color = 'primary', size = 'md', className = '' }) => {
  return (
    <span className={`badge badge-${color} badge-${size} ${className}`}>
      {children}
    </span>
  )
}

export default function MDXContent({ source }) {
  // Use state to control rendering only on client side
  const [mounted, setMounted] = useState(false)

  // Make sure we're only rendering in the browser, not during SSR
  useEffect(() => {
    setMounted(true)
  }, [])

  const components = {
    // daisyUI custom components
    Alert,
    Card,
    Button,
    Badge,
    Tabs,
    Tab,
    CodeBlock,

    // HTML element overrides
    h1: (props) => <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />,
    h2: (props) => <h2 className="text-2xl font-bold mt-5 mb-3" {...props} />,
    h3: (props) => <h3 className="text-xl font-bold mt-4 mb-2" {...props} />,
    a: (props) => <a className="link link-primary" {...props} />,
    table: (props) => <div className="overflow-x-auto my-4"><table className="table table-zebra" {...props} /></div>,
    blockquote: (props) => <blockquote className="border-l-4 border-primary pl-4 italic my-4" {...props} />,
    ul: (props) => <ul className="list-disc list-inside my-4" {...props} />,
    ol: (props) => <ol className="list-decimal list-inside my-4" {...props} />,
    hr: () => <div className="divider my-6"></div>,
  }

  // Return a placeholder during SSR to avoid the hooks error
  if (!mounted) {
    return <div className="animate-pulse h-screen bg-base-200"></div>
  }

  // Only render MDXRemote on the client side
  return <MDXRemote {...source} components={components} />
}