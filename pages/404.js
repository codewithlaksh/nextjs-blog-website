import Head from "next/head"

export default function Custom404(){
    return (
        <>
        <Head>
            <title>404: Page not found - HuntingCoder</title>
        </Head>
        <div className="container text-center" style={{marginTop: "120px"}}>
            <h1 className="font-weight-bold">:( 404 - Page Not Found</h1>
            <p>😥 Looks like you are lost! 😥</p>
        </div>
        </>
    )
}