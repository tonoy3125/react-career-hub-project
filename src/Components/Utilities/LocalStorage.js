
const getStoredJobApplication =()=> {
    const storedJobApplictaion = localStorage.getItem('job-applictaions')
    if(storedJobApplictaion){
        return JSON.parse(storedJobApplictaion)
    }
    return []
}

const saveJobApplication = id => {
    const storedJobApplication = getStoredJobApplication()
    const exists = storedJobApplication.find(jobId => jobId === id)
    if (!exists) {
        storedJobApplication.push(id)
        localStorage.setItem('job-applictaions',JSON.stringify(storedJobApplication))
    }
}

export { getStoredJobApplication, saveJobApplication }