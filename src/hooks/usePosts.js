import { useState, useEffect } from 'react'
import api from '../services/api'

function usePosts(userId = null) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const url = userId ? `/posts?user_id=${userId}` : '/posts'
                const { data } = await api.get(url)
                setPosts(data)
            } catch {
                setError('Error al cargar los posts')
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [userId])

    return { posts, loading, error }
}

export default usePosts