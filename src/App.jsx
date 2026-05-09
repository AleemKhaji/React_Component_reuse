import { useState } from 'react'
import ProfileCard from './components/card'
import Cardgrid from './components/cardgrid'
import Carousel from './components/corossel'
import Disclosure from './components/disclosure'
import AccordionGroup from './components/accordiongroup'
import Button from './components/button'
import './app.scss'

const frontendProfiles = [
  { id: 1, name: 'Anjali Sharma', role: 'Frontend Engineer', senior: true,
    skills: 'Angular Developer',
    description: 'Working as front developer with 5+ years of experience' },
  { id: 2, name: 'Sharma', role: 'Frontend Engineer', senior: false },
  { id: 3, name: 'Anjali', role: 'Frontend Engineer', senior: true },
]

const backendProfiles = [
  { id: 1, name: 'Neha',  role: 'Backend Engineer', senior: true,
    description: 'Node.js specialist with 8 years experience' },
  { id: 2, name: 'Ravi',  role: 'Backend Engineer', senior: true,
    description: 'Senior Tech Lead with 20 years in Banking Domain' },
  { id: 3, name: 'Arjun', role: 'DevOps Engineer', senior: false },
  { id: 4, name: 'Sara',  role: 'Backend Engineer', senior: true,
    description: 'Node.js specialist with 8 years experience' },
  { id: 5, name: 'Srija', role: 'Backend Engineer', senior: true,
    description: 'Node.js specialist with 8 years experience' },
  { id: 6, name: 'Uhaa',  role: 'Backend Engineer', senior: true,
    description: 'Node.js specialist with 8 years experience' },
]

const supportItems = [
  {
    id: 1,
    title: 'How do I reset my password?',
    content: <p>Go to Settings → Account → Reset Password.</p>
  },
  {
    id: 2,
    title: 'How do I contact support?',
    content: (
      <>
        <p>Email us at support@example.com</p>
        <a href="/contact">Open support ticket</a>
      </>
    )
  },
]

export default function App() {
  // ALL hooks and functions go INSIDE the component
  const [isLoading, setIsLoading] = useState(false)

  function handleDelete() {
    alert('Are you sure you want to delete?')
  }

  async function handleClick() {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    alert('Done! Spinner worked ✓')
  }

  return (
    <div className='app1'>
      <ProfileCard
        name='Aleem'
        role='Front end Developer'
        senior={false}
        skills='React, Next.js, JS'
        description='Front Developer with 4 years of experience'
      />
      <Disclosure type="error" title="Access Denied"
        message="You do not have permission to view this." />
      <Carousel />
      <h2>Frontend Team</h2>
      <Cardgrid profiles={frontendProfiles} />
      <Disclosure type="info" title="Privacy Notice"
        message="This app displays your browsing session..." />
      <h2>Backend Team</h2>
      <Cardgrid profiles={backendProfiles} />
      <Disclosure type="warning"
        message="Your session will expire in 5 minutes." />
      <h2>Support</h2>
      <AccordionGroup items={supportItems} />

      <Button onClick={() => alert('button clicked')}>Click me</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="danger" onClick={handleDelete}>Delete</Button>
      <Button variant="ghost">Learn more</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button disabled>Not available</Button>
      <Button variant="primary" onClick={handleClick} loading={isLoading}>
        {isLoading ? 'Saving...' : 'Save'}
      </Button>
      <Button type="submit" variant="primary">Submit form</Button>
      <Button variant="primary">✓ Save changes</Button>
    </div>
  )
}