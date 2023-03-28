const axios = require('axios')

const getJobList = async (description, location, fulltime, page) => {
  try {
    const url = "http://dev3.dansmultipro.co.id/api/recruitment/positions.json"
    if (description || location || fulltime || page) {
      const params = {
        description: description,
        location: location,
        full_time: fulltime,
        page: page
      }
      const result = await axios(url, { params })
      console.log(result)

      return {
        status: 'success',
        data: result.data
      }
    }

  } catch (error) {
    console.error(error)
    return {
      status: 'error',
      message: error.message
    }
  }
}

const getJobDetail = async (id) => {
  try {
    const url = 'http://dev3.dansmultipro.co.id/api/recruitment/positions'
    const response = await axios(`${url}/${id}`)
    
    if (Object.keys(response.data).length !== 0) {
      return {
        status: 'success',
        data: response.data
      }
    }
    return {
      status: 'success',
      data: response.data,
      message: 'Data not found'
    }
  } catch (error) {
    return {
      status: 'error',
      message: error.message
    }
  }
}

module.exports = {
  getJobList,
  getJobDetail,
}