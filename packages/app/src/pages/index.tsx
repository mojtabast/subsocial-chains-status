import { Divider } from "components";
import Header from "../components/Header";
import Toolbar from "../components/Toolbar";
import ChainsList from "../components/ChainsList";
import useChains from "../hooks/useChains";
import { Box } from "components";
import Head from "next/head";

export default function Home() {
  let { check, refresh } = useChains();

  return (
    <>
      <Head>
        <title>Chains Status Page - Subsocial</title>
      </Head>
      <Box py="xxxl" px="l">
        <Header onRefresh={refresh} />
        <Divider size="xxl" />
        <main>
          <Box bg="common.white" br="m">
            <Toolbar />
            <ChainsList check={check} refresh={refresh} />
          </Box>
        </main>
      </Box>
    </>
  );
}
