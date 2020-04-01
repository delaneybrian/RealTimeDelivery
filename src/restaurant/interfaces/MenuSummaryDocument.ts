import { Document } from 'mongoose';
import { MenuSummary } from './MenuSummary';

export interface MenuSummaryDocument extends Document, MenuSummary {
    id: string;
    name: string;
}