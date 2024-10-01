import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Channel from './pages/Channel.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import { ThemeProvider } from './lib/theme/theme-provider.jsx'
import VideoPage from './pages/Watch.jsx'
import { Provider } from 'react-redux'
import store from './redux/reduxStore.js'
import SelfChannel from './pages/SelfChannel.jsx'


const Videodata = [
  {
    "videoId": "video01",
    "title": "Learn React in 30 Minutes",
    "thumbnailUrl": "https://example.com/thumbnails/react30min.png",
    "description": `A quick tutorial to get started with React.`,
    "channelId": "channel01",
    "uploader": "user01",
    "views": 15200,
    "likes": 1023,
    "dislikes": 45,
    "uploadDate": "2024-09-20",
    "comments": [
      {
        "commentId": "comment01",
        "userId": "user02",
        "text": "Great video! Very helpful.",
        "timestamp": "2024-09-21T08:30:00Z"
      }
    ]
  }
];


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/channel',
        element: <SelfChannel  />,
      },
      {
        path: '/channel/:handle',
        element: <Channel  />,
      },
      {
        path: "/watch/:videoId",
        element: <VideoPage videoData={Videodata[0]} />,
      }
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
