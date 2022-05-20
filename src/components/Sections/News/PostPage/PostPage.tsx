import React, {FC, useEffect, useState} from "react";
// @ts-ignore
import s from "./PostPage.module.scss"
import {Helmet} from "react-helmet-async";
import {DesignBox} from "../../../UI/DesignBox";
import {NavLink, useParams} from "react-router-dom";
import {Preloader} from "../../../UI/Preloader";

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

interface IState {
    loading: boolean,
    posts: null | Post[],
}

interface IProps {
    className?: string,
}

export const PostPage: FC<IProps> = ({children}) => {
    const params = useParams<{
        id: string
        title: string
        body: string
    }>()

    const [state, setState] = useState<IState>({
        loading: true,
        posts: null,
    })

    const getPost = async (id: string) => {
        setState((prevState) => ({...prevState, loading: true}))
        try {
            const d = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const posts = await d.json()
            setState((prevState) => ({...prevState, posts, loading: false}))
            console.log('Пост', posts)
        } catch (e) {
            console.log('err', e)
        }
    }
    useEffect(() => {
        if (params.id)
            getPost(params.id)
        console.log('Новость', params.id)
    }, [params])


    return (
        <>
            <Helmet>
                <title>Новости</title>
            </Helmet>

            <div className={s.container}>
                <div className={s.body1}>
                    <article className={s.inside}>
                        <NavLink to={'/news'} className={s.link}>
                            <div className={s.button}>
                                Назад
                            </div>
                        </NavLink>
                        <div>
                            {state.loading ? (
                                <Preloader/>
                            ) : (
                                <>
                                    {!!state?.posts?.length ? (
                                        state.posts.map(posts => (
                                            <DesignBox key={posts.id}>
                                                <div>
                                                    <div>
                                                        <h1>{posts.title}</h1>
                                                    </div>
                                                    <div>
                                                        <p>{posts.body}</p>
                                                    </div>
                                                </div>
                                            </DesignBox>
                                        ))
                                    ) : (
                                        <DesignBox>
                                            <div>Список пуст</div>
                                        </DesignBox>
                                    )}
                                </>
                            )}
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}
