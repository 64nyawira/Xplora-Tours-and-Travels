import express, {json}from 'express'
import tour_router from './router/tour.router'
import user_router from './router/user.router'
import review_router from './router/review.router'
import book_router from './router/booking.router'

let app =express()

app.use(json ())

app.use('/tour',tour_router)


app.use('/user',user_router)


app.use('/review',review_router)


app.use('/booking',book_router)


app.listen(4115,()=>{
    console.log("server running on port 4115...");
    
})