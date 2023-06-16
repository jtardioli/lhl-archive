
function TweetForm() {
  function onSubmit(e) {
    e.preventDefault()
    console.log('suip')

  }
  const placeholder = 'What are you humming about?'
  return ( 
    <div>
    <section className="error-container">
    <i className="fas fa-exclamation-triangle"></i>

    <i className="fas fa-exclamation-triangle"></i>

  </section>
  <section  className="newtweet">
    <form onClick={onSubmit} method="post" action="/tweets" className="newtweet__form">
      <textarea className="form__textarea" name="text" placeholder={placeholder}></textarea>
      <input  type="submit" value="Tweet" className="form__input"/>
      <span className="form__counter">140</span>
    </form>
  </section>
    </div>

  )
}

export default TweetForm