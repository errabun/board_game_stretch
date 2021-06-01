const getGames = () => {
  return fetch("https://api.boardgameatlas.com/api/search?client_id=hesvHSCpmf")
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error(res)
    })
}

export{
   getGames
} 
