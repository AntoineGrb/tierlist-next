import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='mt-32 flex flex-col justify-center items-center gap-3'>
        <h2>Not found – 404!</h2>
        <div>
            <Link className=' underline underline-offset-2' href="/">Go back to Home</Link>
        </div>
    </div>)
}