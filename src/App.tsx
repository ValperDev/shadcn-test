import { Button } from './components/ui/button'
import { BadgeDemo } from './components/demo/BadgeDemo'
import { CarouselDemo } from './components/demo/CarouselDemo'
import { CardWithForm } from './components/demo/CardWithForm'
import { AccordionDemo } from './components/demo/AccordionDemo'

function App() {
  return (
    <>
      <div className='flex flex-col items-center justify-center gap-2'>
        <Button>Testing</Button>
        <BadgeDemo></BadgeDemo>
        <CarouselDemo></CarouselDemo>
        <CardWithForm></CardWithForm>
        <div className='w-[500px]'>
          <AccordionDemo></AccordionDemo>
        </div>
      </div>
    </>
  )
}

export default App
