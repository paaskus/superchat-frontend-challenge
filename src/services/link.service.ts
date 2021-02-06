import { firestore } from '../utils/firebase';

interface CreateLinkArgs {
  username: string;
  repository: string;
  iconId: string;
  color: string;
}

export default class LinkService {
  public static async createLink(args: CreateLinkArgs) {
    const linkRef = await firestore.collection('links').add(args);

    return linkRef.id;
  }
}
