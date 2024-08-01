import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getBlogsData()
    console.log('cdm')
  }

  getBlogsData = async () => {
    this.setState({isLoading: true})
    const obj = {
      method: 'GET',
    }
    const response = await fetch('https://apis.ccbp.in/blogs', obj)
    console.log(response)
    const data = await response.json()
    console.log(data)

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogsData: formattedData})
    this.setState({isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    console.log(blogsData)
    console.log('l')
    return (
      <div className="blogs-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="blogs-list">
            {blogsData.map(eachBlogItem => (
              <BlogItem blogItemDetails={eachBlogItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
