import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from './config'

app.initializeApp(firebaseConfig)
const db = app.firestore()

export const signUpByEmail = async inputData => {
    const { name, email, password } = inputData

    const newUser = await app
        .auth()
        .createUserWithEmailAndPassword(email, password)

    return await newUser.user.updateProfile({
        displayName: name,
    })
}

const mapUserFromGoogleAuth = user => {
    if (!user) return null

    const { uid, displayName } = user
    const appUser = {
        uid,
        name: displayName,
    }
    return appUser
}

export const getSignedInUserName = () => {
    const user = app.auth().currentUser
    const username = user ? user.displayName : ''

    return username
}

export const onAuthStateChanged = onChangeState => {
    return app.auth().onAuthStateChanged(user => {
        const appUser = mapUserFromGoogleAuth(user)
        onChangeState(appUser)
    })
}

export const signInByEmail = async inputData => {
    const { email, password } = inputData
    return await app.auth().signInWithEmailAndPassword(email, password)
}

export const signInWithGoogle = async () => {
    const googleProvider = new app.auth.GoogleAuthProvider()
    const user = await app.auth().signInWithPopup(googleProvider)

    return mapUserFromGoogleAuth(user)
}

export const signOut = async () => {
    return await app.auth().signOut()
}

export const createNewTask = async task => {
    await db.collection('tasks').add(task)
    return await fetchListOfTasks(task.userId)
}

export const fetchListOfTasks = async userId => {
    const tasksSnapshot = await db
        .collection('tasks')
        .where('userId', '==', userId)
        .orderBy('taskDate', 'desc')
        .get()
    return await tasksSnapshot.docs.map(doc => {
        const data = doc.data()
        const id = doc.id

        return {
            id,
            ...data,
        }
    })
}

export const deleteTask = async taskId => {
    await db.collection('tasks').doc(taskId).delete()
}

export const completeTask = async task => {
    await db.collection('tasks').doc(task.id).update(task)
}
