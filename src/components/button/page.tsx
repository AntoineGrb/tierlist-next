import { ButtonProps } from '../../../app/lib/interfaces';

const Button = ({text, action}: ButtonProps) => {
    return (
        <button onClick={action} className='bg-white hover:bg-slate-200 text-black w-2/3 p-1 rounded-sm max-w-80'>
            {text}
        </button>
    )
}

export default Button;