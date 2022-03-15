import React, {FC, useEffect, useState} from "react";
// @ts-ignore
import s from "./News.module.scss"

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

interface IState {
    limit: number,
    posts: null | Post[]
}

interface IProps {
    className?: string,
}

export const NewsBlog: FC<IProps> = ({}) => {
    const [state, setState] = useState<IState>({
        posts: null,
        limit: 10,
    })
    const getPost = async () => {
        try {
            const d = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${state.limit}`)
            const posts = await d.json()
            setState((prevState) => ({...prevState, posts}))
        } catch (e) {
            console.log('err', e)
        }
    }
    useEffect(() => {
        getPost()
    }, [state.limit])

    const handleSelectChange = (e: any) => {
        const limit = +e.target.value
        console.log(limit)
        setState({...state, limit})
    }
}

