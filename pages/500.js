import Head from "next/head"

export default function Custom500() {
    return (
        <>
            <Head>
                <title>500: Internal Server Error - HuntingCoder</title>
            </Head>
            <div className="container text-center" style={{ marginTop: "120px" }}>
                <h1 className="font-weight-bold">:( 500 - Internal Server Error</h1>
                <p>😣 Aw snap, we have encountered an internal server error! 😣</p>
            </div>
        </>
    )
}