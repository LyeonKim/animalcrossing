import Layout from "@/components/Layout"
import wrapper from "@/store";

export const metadata = {
  title: 'AnimalCrossing',
  description: '모여봐요 동물의 숲: 나의 섬 데이터',
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
    <Layout>
      <Component  {...pageProps} />
    </Layout>
    </>
  )
}

// withRedux HOC 로 컴포넌트 감싸기 -> 이제 각 페이지에서 getStaticProps, getServerSideProps 등 함수 내에서 스토어의 접근이 가능해짐
export default wrapper.withRedux(MyApp);
