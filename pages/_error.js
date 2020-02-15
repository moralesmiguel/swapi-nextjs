function Error({ statusCode }) {
	return (
		<div className="blue-background">
            <p> Error {statusCode} rebel scum has corrupted the files</p>
            <p>Type any letter in the field and click enter to return</p>
            <input type="text" id="two" onKeyUp={handleKeyPress} />
        </div>
	)
}

const handleKeyPress=(event)=>{
    if (event.key === 'Enter'){
        window.location.href="/"
    }
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }

export default Error;