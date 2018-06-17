import React, {Component} from "react"
import axios from "axios"
import Navbar from "./Navbar"
import Search from "./Search"
import Results from "./Results"
import Saved from "./Saved"
import Footer from "./Footer"

class Main extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: "",
    articles: [],
    saved: []
  }
  
  handleTopicInput = event => {
    this.setState({ topic: event.target.value })
  }

  handleStartYearInput = event => {
    this.setState({ startYear: event.target.value })
  }

  handleEndYearInput = event => {
    this.setState({ endYear: event.target.value })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    let topic =  this.state.topic
    let startYear =  this.state.startYear
    let endYear =  this.state.endYear
    // NYT API Search
    const authKey = "8ff951779ef8421f8c330c0515c2942a"
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231"
    axios.get(`${queryURL}`)
      .then(res => {
        const articles = res.data.response.docs
        this.setState({ articles })
      })
      .catch(e => {
        console.log(e)
      })
    }
  
  handleDelete = event => {
    const id = event.target.attributes.id.value
    axios.delete(`/articles/${id}`, {
      _id: event.target.attributes.id.value,
      title: event.target.title,
      date: event.target.attributes.date.value,
      url: event.target.attributes.url.value
    })
      .then(r => {
        axios.get('/articles', {})
          .then(r => {
            this.setState({ saved: r.data })
          })
          .catch(e => {
            console.log(e)
          })
        this.renderSavedArticles()
      })
      .catch(e => {
        console.log(e)
      })
  }
    
  handleSave = event => {
    axios.post('/articles', {
      title: event.target.title,
      date: event.target.attributes.date.value,
      url: event.target.attributes.url.value
    })
      .then(r => {
        axios.get('/articles', {})
          .then(r => {
            this.setState({ saved: r.data })
          })
          .catch(e => {
            console.log(e)
          })
        this.renderSavedArticles()
      })
      .catch(e => {
        console.log(e)
      })
  }

  renderArticleCards = () => {
    return this.state.articles.map(article => (
      <Results
        key={article._id}
        title={article.headline.main}
        date={article.pub_date}
        url={article.web_url}
        handleSave={this.handleSave}
      />
    ))
  }

  renderSavedArticles = () => {
    return this.state.saved.map(saved => (
      <Saved
        key={saved._id}
        title={saved.title}
        date={saved.date}
        url={saved.url}
        id={saved._id}
        handleDelete={this.handleDelete}
      />
    ))
  }

  handleSaveShow = event => {
    event.preventDefault()
    axios.get('/articles', {})
      .then(r => {
        this.setState({ saved: r.data })
      })
      .catch(e => {
        console.log(e)
      })
    this.renderSavedArticles()
  }

  render() {
    return (
      <div>
        <Navbar 
          handleSaveShow={this.handleSaveShow}
        />
        <Search 
          handleTopicInput={this.handleTopicInput}
          handleStartYearInput={this.handleStartYearInput}
          handleEndYearInput={this.handleEndYearInput}
          handleFormSubmit={this.handleFormSubmit}
          renderArticleCards={this.renderArticleCards}
          renderSavedArticles={this.renderSavedArticles}
        />
        <Footer />
      </div>
    )
  }
}

export default Main
