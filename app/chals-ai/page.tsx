import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CHALS AI',
  description: 'CHALS AI Platform',
}

export default function ChalsAI() {
  return (
    <div>
      <iframe 
        src="/index.html" 
        style={{
          width: '100%',
          height: '100vh',
          border: 'none'
        }}
        title="CHALS AI Platform"
      />
    </div>
  )
}
