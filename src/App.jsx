import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/maria.png",
      name: 'Mariana Dias',
      role: 'Tech Lead @TechForge'
    },
    content: [
      { type: 'paragraph', content: 'Bom dia time 👋' },
      { type: 'paragraph', content: 'Essa semana vamos implementar a responsividade no aplicativo do cliente, verifiquem as responsabilidades de cada um no projeto, lembrem-se que teremos reunião na Quinta-Feira as 15hs, segue link com a pauta da reunião:' },
      { type: 'link', content: 'mariana.techlead/reuniaoResponsividade' },
    ],
    publishedAt: new Date('2024-03-18 09:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/connor.png',
      name: 'João Almeida',
      role: 'Design Director @TechForge'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Gostaria de compartilhar que na próxima semana teremos a Semana do Design com diversas atividades e palestras, acompanhe tudo pelo nosso cronograma 🚀' },
      { type: 'link', content: 'semanaDesign/cronograma' },
    ],
    publishedAt: new Date('2024-03-19 11:00:00'),
  },
];

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
             )
             })}
        </main>
      </div>
    </div>
  )
}

