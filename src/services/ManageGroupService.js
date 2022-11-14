
import { baseService } from "./baseService";

export class ManageGroupService extends baseService {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    addGroup = (data) => {
        return this.post(`api/GroupFlower`, data)
    }

    getAll = () => {
        return this.get(`api/GroupFlower`)
    }

    getDetail = (id) => {
        return this.get(`api/GroupFlower/${id}`)
    }
    updateGroup = (id, data) => {
        return this.put(`api/GroupFlower/${id}`, data)
    }
    delGroup = (id) => {
        return this.put(`api/GroupFlower/Delete/${id}`)
    }


}

export const manageGroupService = new ManageGroupService();