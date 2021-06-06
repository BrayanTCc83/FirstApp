import Post from "./index"
/**
 * @param {Object} props
 */
export default function Post (props:{
    id ?: string,
    data : { [key:string] : any }
}) : JSX.Element