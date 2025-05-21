const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((total, blog) => {
    return total += blog.likes
  }, 0)
}

const favouriteBlog = (blogs) => {
  let favourite = blogs[0]
  for (let i = 1; i < blogs.length; i++) {
    if (blogs[i].likes > favourite.likes) {
      favourite = blogs[i]
    }
  }
  return favourite
}

const mostBlogs = (blogs) => {
  const count = {}
  for (const blog of blogs) {
    count[blog.author] = (count[blog.author] || 0) + 1
  }

  const countArray = Object.entries(count)

  let mostIndex = 0
  for (let i = 1; i < countArray.length; i++) {
    if (countArray[i][1] > countArray[mostIndex][1]) {
      mostIndex = i
    }
  }

  return {
    author: countArray[mostIndex][0],
    blogs: countArray[mostIndex][1]
  }
}

const mostLikes = (blogs) => {
  const likeCount = {}
  for (const blog of blogs) {
    likeCount[blog.author] = (likeCount[blog.author] || 0) + blog.likes
  }

  const likeCountArray = Object.entries(likeCount)

  let mostIndex = 0
  for (let i = 1; i < likeCountArray.length; i++) {
    if (likeCountArray[i][1] > likeCountArray[mostIndex][1]) {
      mostIndex = i
    }
  }

  return {
    author: likeCountArray[mostIndex][0],
    likes: likeCountArray[mostIndex][1]
  }
}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs,
  mostLikes
}