import Link from "next/link";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig() || {};

export const NODE_ENV = publicRuntimeConfig || {};

const REGION_ID = NODE_ENV.NEXT_PUBLIC_REGION_ID;

export default function IndexPage() {
    return (
        <div>
            Hello World. {REGION_ID}
            <Link href="/about">
                <a>About</a>
            </Link>
        </div>
    );
}

IndexPage.getInitialProps = () => {
    return {_id: Math.random()};
}
