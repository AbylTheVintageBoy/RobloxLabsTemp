import { RequestHandler } from 'express-serve-static-core';
import { FASTLOG5, DFLog } from '../../Util/Roblox.Web.Util/Logging/FastLog';

export const NomadHandler = ((request, response, next) => {
	FASTLOG5(
		DFLog('Protocol77'),
		`[DFLog::Protocol77] %s REQUEST ON %s://%s%s FROM %s (${request.ip})`,
		request.method.toUpperCase(),
		request.protocol,
		request.hostname,
		request.url,
		(request.headers['user-agent'] || '').toUpperCase(),
	);
	next();
}) as RequestHandler;