export {default} from "next-auth/middleware"

export const config = {
    matcher:['/:path*','/api/:path*','/api/authen/:path*']
}