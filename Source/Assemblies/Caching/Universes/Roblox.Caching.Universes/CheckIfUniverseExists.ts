import { __baseDirName } from '../../../Common/Constants/Roblox.Common.Constants/Directories';
import filestream from 'fs';

export const CheckIfUniverseExists = (universeId: number): boolean => {
	const universePath = __baseDirName + '\\Roblox.Moblox.Manifest\\universes\\' + universeId;
	if (!filestream.existsSync(universePath)) {
		return false;
	}
	return true;
};