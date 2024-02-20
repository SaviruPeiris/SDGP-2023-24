import React, { useState } from "react"

import "./details.css"

import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../../assets/data/data"

export const DetailsPages = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  }, [])

  return (
    <>
      {blogs ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={blogs.cover} alt='' />
            </div>
            <div className='right'>
              <div className='buttons'>
                
              </div>
              <h1>Taking care of your self.</h1>
              <p>{blogs.desc}</p>
              <p>"Try to keep a routine, such as bathing, dressing, and eating at the same time each day.
Help the person write down to-do lists, appointments, and events in a notebook or calendar.
Plan activities that the person enjoys and try to do them at the same time each day.
Consider a system or reminders for helping those who must take medications regularly.
When dressing or bathing, allow the person to do as much as possible.
Buy loose-fitting, comfortable, easy-to-use clothing, such as clothes with elastic waistbands, fabric fasteners, or large zipper pulls instead of shoelaces, buttons, or buckles.
Use a sturdy shower chair to support a person who is unsteady and to prevent falls. You can buy shower chairs at drug stores and medical supply stores.
Be gentle and respectful. Tell the person what you are going to do, step by step while you help them bathe or get dressed.
Serve meals in a consistent, familiar place and give the person enough time to eat.."</p>
             <h1> Healthy and Active lifestyle </h1>
             <p>Consider different activities the person can do to stay active, such as household chores, cooking and baking, exercise, and gardening. Match the activity to what the person can do.
Help get an activity started or join in to make the activity more fun. People with dementia may lack interest or initiative and can have trouble starting activities. But, if others do the planning, they may join in.
Add music to exercises or activities if it helps motivate the person. Dance to the music if possible.
Be realistic about how much activity can be done at one time. Several short “mini-workouts” may be best.
Take a walk together each day. Exercise is good for caregivers, too!
Buy a variety of healthy foods, but consider food that is easy to prepare, such as premade salads and single portions.</p>
            
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
