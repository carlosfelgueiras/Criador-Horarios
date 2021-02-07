import * as Domain from './domain'

export default class Comparables {
    static indexOf(arr: Domain.Comparable[], obj: Domain.Comparable) {
        const length = arr.length
        for (let i = 0; i < length; i++) {
            if (arr[i].equals(obj)) {
                return i
            }
        }
        return -1 
    }

    static indexOfFunc(arr: Domain.Comparable[], obj: Domain.Comparable, compareFunc: Function) {
        const length = arr.length
        for (let i = 0; i < length; i++) {
            if (compareFunc(arr[i], obj)) {
                return i
            }
        }
        return -1 
    }

    static includes(arr: Domain.Comparable[], obj: Domain.Comparable) {
        return arr.some((other: Domain.Comparable) => other.equals(obj))
    }

    static includesFunc(arr: Domain.Comparable[], obj: Domain.Comparable, compareFunc: Function) {
        return arr.some((other: Domain.Comparable) => compareFunc(obj, other))
    }

    static toUnique(arr: Domain.Comparable[]): Domain.Comparable[] {
        const res: any = {}
        arr.forEach((obj: Domain.Comparable) => {
            res[obj.hashString()] = obj
        })
        return Object.values(res) as Domain.Comparable[]
    }
}