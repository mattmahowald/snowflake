import SnowflakeApp from '../components/SnowflakeApp'
import fetch from 'isomorphic-unfetch'

const Page = ({ tracks }) => <div>
  <SnowflakeApp tracks={tracks} />
</div>

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('http://localhost:3000/static/tracks.js')
  const json = await res.json()
  return { tracks: json }
}

export default Page
