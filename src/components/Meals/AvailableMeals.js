import React from 'react'
import Card from '../UI/Card'
import { dummy_meals } from './dummymeals'
import MealItem from './MealItem/MealItem'

const AvailableMeals = () => {
    const jsxMealData = dummy_meals.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>)
  return (
    <section className='-translate-y-28 '>
        <Card className='bg-white w-11/12 mx-auto lg:w-3/5'>
        <ul>
            {jsxMealData}
        </ul>
        </Card>
    </section>
  )
}

export default AvailableMeals