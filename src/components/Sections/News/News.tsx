import React, {FC, useEffect, useState} from "react";
// @ts-ignore
import s from "./News.module.scss"
import {Helmet} from "react-helmet-async";
import {Preloader} from "../../UI/Preloader";
import {DesignBox} from "../../UI/DesignBox";

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

const News: FC<IProps> = ({}) => {
    const [state, setState] = useState<IState>({
        posts: null,
        limit: 10,
    })
    const getPost = async () => {
        try {
            const d = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${state.limit}`)
            const posts = await d.json()
            setState((prevState) => {
                return {...prevState, posts}
            })
        } catch (e) {
            console.log('err', e)
        }
    }
    useEffect(() => {
        getPost()
        return () => {
            console.log('DELETE')
        }
    }, [])

    state.posts?.map(ele => ele.body)

    return (
        <>
            <Helmet>
                <title>Новости</title>
            </Helmet>

            <div className={s.container}>
                <div className={s.body1}>
                    <article className={s.inside}>
                        <select id="select1" className={s.select}>
                            <option value={"5"}>5</option>
                            <option value={"10"}>10</option>
                            <option value={"15"}>15</option>
                            <option value={"30"}>30</option>
                        </select>
                        <div>
                            {!state.posts ? (
                                <Preloader/>
                            ) : (
                                <>
                                    {!!state.posts.length ? (
                                        state.posts.map(elem => (
                                            <DesignBox key={elem.id}>
                                                <div>
                                                    <h1>{elem.title}</h1>
                                                    <div>
                                                        <p>{elem.body}</p>
                                                    </div>
                                                </div>
                                            </DesignBox>
                                        ))
                                    ) : (
                                        <div>Список пуст</div>
                                    )}
                                </>
                            )}
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};

export {News}