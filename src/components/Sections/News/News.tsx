import React, {FC, useEffect, useState} from "react";
// @ts-ignore
import s from "./News.module.scss"
import {Helmet} from "react-helmet-async";
import {Preloader} from "../../UI/Preloader";
import {DesignBox} from "../../UI/DesignBox";
import {Link,} from "react-router-dom";

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

interface IState {
    loading: boolean,
    limit: number,
    posts: null | Post[],
}

interface IProps {
    className?: string,
}

export const News: FC<IProps> = ({className, children}) => {
    const [state, setState] = useState<IState>({
        posts: null,
        limit: 10,
        loading: true,
    })
    const getPost = async () => {
        setState((prevState) => ({...prevState, loading: true}))
        try {
            const d = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${state.limit}`)
            const posts = await d.json()
            setState((prevState) => ({...prevState, posts, loading: false}))
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

    return (
        <>
            <Helmet>
                <title>Новости</title>
            </Helmet>
            <div className={s.container}>
                <div className={s.body1}>
                    <article className={s.inside}>
                        <select className={s.select} value={state.limit} onChange={handleSelectChange}>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={30}>30</option>
                        </select>
                        <div>
                            {state.loading ? (
                                <Preloader/>
                            ) : (
                                <>
                                    {!!state?.posts?.length ? (
                                        state.posts.map(elem => (
                                            <DesignBox key={elem.id}>
                                                <div>
                                                    <Link to={`/news/${elem.id}`} className={s.link}>
                                                        <h1>{elem.title}</h1>
                                                    </Link>
                                                    <div>
                                                        <p>{elem.body}</p>
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

