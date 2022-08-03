import Head from "next/head";

const MetaLayout = ( {title, description}) => {
    return (  

        <Head>
            <title>
                {title}
            </title>
            <meta name="description" content={description}></meta>
       
           <link rel="shortcut icon" href="/favicon.ico" type="image/png"></link>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-32x32.png"></link>
            <link rel="icon" type="image/png" sizes="32x32" href="/android-chrome-512x512.png"></link>
            <link rel="icon" type="image/png" sizes="32x32" href="/android-chrome-192x192.png"></link>
            <link rel="manifest" href="/site.webmanifest"></link>
        </Head>
        
    )
};
export default MetaLayout;
