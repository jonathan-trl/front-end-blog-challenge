'use client'
import { useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'

interface postsProps {
  id: number
  title: string
  date: string
  excerpt: string
  favorited: boolean
}

export default function Home() {
  const [posts, setPosts] = useState<postsProps[]>([])

  const getPosts = () => {
    const newPosts: postsProps[] = [
      {
        id: 1,
        title: 'Agora é oficial: o Windows 11 está vindo',
        date: '02 de jul, 2021',
        excerpt: 'Tim Berners-Lee vai leiloar código-fonte da web',
        favorited: false,
      },
      {
        id: 2,
        title: 'Tim Berners-Lee vai leiloar código-fonte da web',
        date: '03 de jul, 2021',
        excerpt:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
        favorited: false,
      },
      {
        id: 3,
        title: 'Tem Firefox novo no pedaço e você vai querer migrar',
        date: '04 de jul, 2021',
        excerpt:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.',
        favorited: false,
      },
      {
        id: 4,
        title: 'John McAfee, criador do antivírus McAfee, morre',
        date: '05 de jul, 2021',
        excerpt:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
        favorited: false,
      },
    ]

    setPosts(newPosts)
  }

  const handlePostFavorite = (id: number) => {
    const newPost = posts.map((post) => {
      if (post.id === id) {
        return { ...post, favorited: !post.favorited }
      }

      return post
    })

    setPosts(newPost)
  }

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <main className="flex flex-col">
      <div className="bg-gradient-to-r from-indigo to-cyan">
        <div className="max-w-4xl px-6 m-auto py-7 flex flex-col">
          <div className="flex justify-between">
            <span className="text-lg md:text-2xl">Codelândia</span>
            <span className="text-lg md:text-2xl">blog</span>
          </div>
          <div className="mt-12">
            <div className="flex items-center gap-4 bg-white/[0.2] px-4 py-3 rounded">
              <span>
                <AiOutlineSearch size={'1.4em'} />
              </span>
              <input
                type="text"
                className="bg-transparent border-none text-white placeholder-white/[0.5] outline-none w-full "
                placeholder="Pesquisar no blog"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full bg-off-white">
        <div className="max-w-4xl px-6 m-auto py-16 flex flex-col gap-6 md:gap-12">
          {posts &&
            posts.map((post) => (
              <div
                key={post.id}
                className="shadow-lg max-w-[900px] rounded bg-white p-6"
              >
                <div className="flex justify-between">
                  <span className="text-body text-sm md:text-base">
                    {post.date}
                  </span>
                  <span
                    className="cursor-pointer select-none"
                    onClick={() => handlePostFavorite(post.id)}
                  >
                    {post.favorited ? (
                      <AiFillHeart size={'1.3em'} color={'indigo'} />
                    ) : (
                      <AiOutlineHeart size={'1.3em'} color={'indigo'} />
                    )}
                  </span>
                </div>
                <div className="mt-4 mb-2">
                  <h1 className="text-title text-lg md:text-2xl font-normal">
                    {post.title}
                  </h1>
                </div>
                <div>
                  <span className="text-body text-sm leading-6 md:text-lg md:leading-8">
                    {post.excerpt}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  )
}
