export default function Gradient({direction}: {direction: 'l' | 'r'}) {
    return <div className={`block size-[1.5px] rounded-md w-screen ${direction == 'l' ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-[#69B99D] to-gray-50 mt-40`}></div>
}