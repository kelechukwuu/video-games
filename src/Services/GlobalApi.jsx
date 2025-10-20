import axios  from "axios";

const key = "0d6a82ae692d402faf66422906d504f5"

const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+key);
export default{ getGenreList}