import Link from 'next/link'
import { ErrorMessageProps } from '../../../app/lib/interfaces'

export default function ErrorMessage({message}: ErrorMessageProps) {
  return (
    <div className='mt-32 flex flex-col justify-center items-center gap-3'>
        <h2>List does not exists!</h2>
        <div>
            <Link className=' underline underline-offset-2' href="/">Go back to Home</Link>
        </div>
    </div>)
}