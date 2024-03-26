import { ButtonProps } from '../../../app/lib/interfaces';

const Button = ({text}: ButtonProps) => {
    return (
        <button className='bg-white text-black w-2/3 p-1 rounded-sm max-w-80'>
            {text}
        </button>
    )
}

export default Button;