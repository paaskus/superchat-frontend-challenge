import ColorName from '../types/ColorName';
import IconName from '../types/IconName';
import { firestore } from '../utils/firebase';

export interface CreateLinkArgs {
  username: string;
  repository: string;
  icon: IconName;
  color: ColorName;
}

export default class LinkService {
  public static async createLink(args: CreateLinkArgs) {
    const linkRef = await firestore.collection('links').add(args);

    return linkRef.id;
  }
}
