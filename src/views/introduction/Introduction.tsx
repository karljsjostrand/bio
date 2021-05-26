import './Introduction.css'

export const Introduction = () => {
  return (
    <div className='introduction-container'>
      <h1 className='name'>Karl Sjöstrand</h1>
      <h2 className='title'>Software Engineer</h2>
      <p>paragraph</p>
      <p>height: {window.innerHeight}, width: {window.innerWidth}</p>
      <div className='frameworks'>
        <h3 className='framework'>Git</h3>
        <h3 className='framework'>.Net</h3>
        <h3 className='framework'>React</h3>
      </div>
      <div className='languages'>
        <h4 className='language'>C#</h4>
        <h4 className='language'>Javascript</h4>
        <h4 className='language'>HTML</h4>
        <h4 className='language'>CSS</h4>

        <h4 className='language'>Python</h4>
        <h4 className='language'>C++</h4>
        <h4 className='language'>C</h4>
      </div>
      <div className='contacts'>
        <img src='' alt='discord' />
        <img src='' alt='slack' />
        <img src='' alt='email' />
      </div>
    </div>
  )
}
