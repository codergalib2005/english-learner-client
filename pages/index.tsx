import Layout from '../components/Layout/HomeLayout'
import Carts from '../components/shared/Carts/Carts'

export default function Home() {
  return (
    <Layout>
      <div className='home_layout_page_parent_class'>
        <Carts />
      </div>
    </Layout>
  )
}
